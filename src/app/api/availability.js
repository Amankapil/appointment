// import dbConnect from "../../lib/dbConnect";
// import Availability from "../../models/Availability";

import dbConnect from "@/lib/dbConnect";
import Availability from "@/models/Availability";

export default async function handler(req, res) {
  await dbConnect();
  const { date } = req.query;

  try {
    const day = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
    const availability = await Availability.findOne({});
    const daySlots =
      availability?.slots.find((s) => s.day === day)?.times || [];

    const bookedSlots = await Appointment.find({
      date: new Date(date),
    }).distinct("time");

    const availableSlots = daySlots.filter(
      (slot) => !bookedSlots.includes(slot)
    );
    res.status(200).json(availableSlots);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
