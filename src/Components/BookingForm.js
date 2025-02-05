// import { useState } from "react";
// import { toast } from "react-hot-toast";

// export default function BookingForm({
//   date,
//   time,
//   onCancel,
//   onSuccess,
//   person,
//   service,
// }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/admin/book", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           date,
//           time,
//         }),
//       });

//       console.log(response.data);
//       // if (!response.ok) throw new Error("Booking failed");
//       // onSuccess();
//       // toast.success("Booking successful!");
//     } catch (error) {
//       toast.error("Booking failed. Please try again.");
//     }
//   };
//   // console.log(person);
//   // console.log(service);

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Date</label>
//         <p className="mt-1 font-semibold">{date.toDateString()}</p>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Time</label>
//         <p className="mt-1 font-semibold">{time}</p>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Person
//         </label>
//         <p className="mt-1 font-semibold">{person}</p>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Service
//         </label>
//         <p className="mt-1 font-semibold">{service}</p>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           className="w-full p-2 border rounded"
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//       </div>
//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           className="w-full p-2 border rounded"
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//       </div>
//       <div>
//         <input
//           type="tel"
//           placeholder="Phone"
//           required
//           className="w-full p-2 border rounded"
//           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//         />
//       </div>
//       <div className="flex justify-end space-x-2">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
//         >
//           Back
//         </button>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Confirm
//         </button>
//       </div>
//     </form>
//   );
// }

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function BookingForm({
  datee,
  time,
  onCancel,
  onSuccess,
  person,
  service,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch("/api/admin/book", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         ...data,
  //         date,
  //         time,
  //         person,
  //         service,
  //       }),
  //     });

  //     if (!response.ok) throw new Error("Booking failed");
  //     const ds = await response.json();
  //     onSuccess(ds);
  //     console.log(ds);
  //     toast.success("Booking successful!");
  //   } catch (error) {
  //     toast.error("Booking failed. Please try again.");
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      // Now update the slot status to "booked"
      var date = new Date(datee).toISOString().split("T")[0];
      console.log(date);
      console.log(datee);

      const response = await fetch("/api/admin/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          date,
          time,
          person,
          service,
        }),
      });

      if (!response.ok) throw new Error("Booking failed");
      const ds = await response.json();
      if (ds.status === 201) {
        const res = await fetch("/api/admin/updateSlot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date, time }),
        });
      }
      // console.log(res);
      onSuccess(ds);
      // console.log(ds);

      toast.success("Booking successful!");
    } catch (error) {
      toast.error("Booking failed. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <p className="mt-1 font-semibold">{datee.toDateString()}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Time</label>
        <p className="mt-1 font-semibold">{time}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Person
        </label>
        <p className="mt-1 font-semibold">{person}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Service
        </label>
        <p className="mt-1 font-semibold">{service}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone"
          {...register("phone", { required: "Phone is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit(onSubmit)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
