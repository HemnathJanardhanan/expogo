import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

const PORT=3000;
const MONGO_URI='mongodb+srv://rustybike04:Janaappa%4021@cluster0.oi1ml.mongodb.net/expogo';



const app = express();
app.use(express.json());
app.use(cors());

const connectdb=async()=>{
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
}

connectdb();



const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePhoto: { type: String, default: "https://www.istockphoto.com/photos/profile-avatar" }, // Store Image URL
    hostedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    bookedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);


const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    date: Date
  });
  
const Event = mongoose.model('Event', EventSchema);




app.post('/', async (req, res) => {
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).json(event);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Read All Events
 app.get('/', async (req, res) => {
    const events = await Event.find();
    res.json(events);
  });
  
  // Read One Event
  app.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (event) res.json(event);
    else res.status(404).json({ message: 'Event not found' });
  });
  
  // Update Event
 app.put('/:id', async (req, res) => {
    try {
      const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(event);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete Event
  app.delete('/:id', async (req, res) => {
    try {
      await Event.findByIdAndDelete(req.params.id);
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

app.listen(PORT, () => console.log(` Server running on port http://localhost:${PORT}/`));
