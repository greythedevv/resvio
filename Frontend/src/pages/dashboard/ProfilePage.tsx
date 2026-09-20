// import { useState } from "react";
// import {
//   FiArrowLeft,
//   FiCalendar,
//   FiClock,
//   FiMapPin,
//   FiCamera,
//   FiUpload,
//   FiPlus,
//   FiTrash2,
//   FiEye,
//   FiCheck,
//   FiExternalLink,
//   FiHeart,
//   FiEdit3,
//   FiImage,
// } from "react-icons/fi";

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     coupleNames: "Daniel & Grace",
//     date: "2026-12-12",
//     time: "14:00",
//     venue: "The Grand Pavilion",
//     location: "Lagos, Nigeria",

//     shortDescription:
//       "We are excited to celebrate this beautiful chapter with the people who mean the most to us.",

//     welcomeMessage:
//       "Thank you for being part of our story. We cannot wait to celebrate this special day with you.",

//     howWeMet:
//       "It all started with a simple introduction. What began as a casual conversation slowly turned into a friendship filled with laughter, late-night conversations, and unforgettable moments.",

//     ourStory:
//       "Over time, our friendship grew into something much deeper. We learned, grew, travelled, laughed, and supported each other through different seasons of life.",

//     proposal:
//       "The proposal was a beautiful surprise surrounded by love and memories we will always cherish. It marked the beginning of our next chapter together.",
//   });

//   const [coverImage, setCoverImage] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);

//   const [storySections, setStorySections] = useState([
//     {
//       id: 1,
//       title: "How We Met",
//       key: "howWeMet",
//     },
//     {
//       id: 2,
//       title: "Our Story",
//       key: "ourStory",
//     },
//     {
//       id: 3,
//       title: "The Proposal",
//       key: "proposal",
//     },
//   ]);

//   const [websiteSettings, setWebsiteSettings] = useState({
//     showStory: true,
//     showGallery: true,
//     showEventDetails: true,
//     showGiftOptions: true,
//     showWelcomeMessage: true,
//   });

//   const [saved, setSaved] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setSaved(false);
//   };

//   const handleImageUpload = (e, type) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     const imageUrl = URL.createObjectURL(file);

//     if (type === "cover") {
//       setCoverImage(imageUrl);
//     }

//     if (type === "profile") {
//       setProfileImage(imageUrl);
//     }

//     setSaved(false);
//   };

//   const handleSave = () => {
//     console.log("Profile data:", formData);
//     console.log("Website settings:", websiteSettings);

//     setSaved(true);

//     setTimeout(() => {
//       setSaved(false);
//     }, 3000);
//   };

//   const toggleWebsiteSetting = (setting) => {
//     setWebsiteSettings((prev) => ({
//       ...prev,
//       [setting]: !prev[setting],
//     }));

//     setSaved(false);
//   };

//   const addStorySection = () => {
//     const newSection = {
//       id: Date.now(),
//       title: "New Story Section",
//       key: `custom_${Date.now()}`,
//     };

//     setStorySections((prev) => [...prev, newSection]);

//     setFormData((prev) => ({
//       ...prev,
//       [newSection.key]: "",
//     }));
//   };

//   const removeStorySection = (id, key) => {
//     setStorySections((prev) =>
//       prev.filter((section) => section.id !== id)
//     );

//     setFormData((prev) => {
//       const updated = { ...prev };
//       delete updated[key];
//       return updated;
//     });
//   };

//   const updateStoryTitle = (id, title) => {
//     setStorySections((prev) =>
//       prev.map((section) =>
//         section.id === id
//           ? {
//               ...section,
//               title,
//             }
//           : section
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[#F8F6F1] text-[#173F3A]">
//       {/* =========================
//           TOP HEADER
//       ========================== */}

//       <header className="sticky top-0 z-40 border-b border-[#173F3A]/10 bg-[#F8F6F1]/95 backdrop-blur">
//         <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-4">
//             <button
//               type="button"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-[#173F3A]/10 bg-white transition hover:bg-[#173F3A] hover:text-white"
//             >
//               <FiArrowLeft size={18} />
//             </button>

//             <div>
//               <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#C76A4A]">
//                 Website
//               </p>

//               <h1 className="text-xl font-semibold tracking-tight">
//                 Profile
//               </h1>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               className="hidden items-center gap-2 rounded-full border border-[#173F3A]/15 bg-white px-4 py-2.5 text-sm font-medium transition hover:bg-[#173F3A] hover:text-white sm:flex"
//             >
//               <FiEye size={16} />
//               Preview
//             </button>

//             <button
//               type="button"
//               onClick={handleSave}
//               className="flex items-center gap-2 rounded-full bg-[#173F3A] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0f302c]"
//             >
//               {saved ? <FiCheck size={16} /> : <FiCheck size={16} />}

//               {saved ? "Saved" : "Save changes"}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* =========================
//           PAGE
//       ========================== */}

//       <main className="mx-auto max-w-[1400px] px-5 py-8 lg:px-8 lg:py-10">
//         {/* INTRO */}

//         <div className="mb-8 max-w-3xl">
//           <p className="mb-2 text-sm font-medium text-[#C76A4A]">
//             Your event website
//           </p>

//           <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
//             Tell your story.
//           </h2>

//           <p className="mt-3 max-w-2xl text-sm leading-6 text-[#173F3A]/60 sm:text-base">
//             Everything you add here appears on your public Resvio website.
//             Share the important details, your story, and the moments that
//             make your celebration yours.
//           </p>
//         </div>

//         <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
//           {/* =========================
//               LEFT COLUMN
//           ========================== */}

//           <div className="space-y-8">
//             {/* =========================
//                 COVER IMAGE
//             ========================== */}

//             <section className="overflow-hidden rounded-[28px] border border-[#173F3A]/10 bg-white">
//               <div className="relative h-[320px] overflow-hidden bg-[#DCE5E0] sm:h-[400px]">
//                 {coverImage ? (
//                   <img
//                     src={coverImage}
//                     alt="Event cover"
//                     className="h-full w-full object-cover"
//                   />
//                 ) : (
//                   <div className="flex h-full flex-col items-center justify-center px-6 text-center">
//                     <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#173F3A] shadow-sm">
//                       <FiCamera size={25} />
//                     </div>

//                     <h3 className="text-lg font-semibold">
//                       Add your cover photo
//                     </h3>

//                     <p className="mt-2 max-w-sm text-sm leading-6 text-[#173F3A]/55">
//                       Choose a beautiful photo that represents your
//                       celebration.
//                     </p>
//                   </div>
//                 )}

//                 <label className="absolute bottom-5 right-5 flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium shadow-lg transition hover:bg-[#173F3A] hover:text-white">
//                   <FiUpload size={16} />

//                   {coverImage ? "Change photo" : "Upload photo"}

//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={(e) => handleImageUpload(e, "cover")}
//                   />
//                 </label>
//               </div>

//               <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <p className="text-sm font-semibold">
//                     Website cover photo
//                   </p>

//                   <p className="mt-1 text-xs text-[#173F3A]/50">
//                     Recommended: landscape image, at least 1600px wide.
//                   </p>
//                 </div>

//                 {coverImage && (
//                   <button
//                     type="button"
//                     onClick={() => setCoverImage(null)}
//                     className="flex items-center gap-2 text-sm font-medium text-[#C76A4A]"
//                   >
//                     <FiTrash2 size={15} />
//                     Remove
//                   </button>
//                 )}
//               </div>
//             </section>

//             {/* =========================
//                 EVENT DETAILS
//             ========================== */}

//             <section className="rounded-[28px] border border-[#173F3A]/10 bg-white p-6 sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C76A4A]">
//                   The basics
//                 </p>

//                 <h3 className="mt-2 text-2xl font-semibold">
//                   Event details
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-[#173F3A]/55">
//                   These details will appear throughout your public event
//                   website.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {/* Couple Names */}

//                 <div>
//                   <label className="mb-2 block text-sm font-medium">
//                     Couple names
//                   </label>

//                   <input
//                     type="text"
//                     name="coupleNames"
//                     value={formData.coupleNames}
//                     onChange={handleChange}
//                     placeholder="Daniel & Grace"
//                     className="w-full rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition focus:border-[#173F3A]/30 focus:bg-white"
//                   />
//                 </div>

//                 {/* Date + Time */}

//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-sm font-medium">
//                       <FiCalendar size={15} />
//                       Event date
//                     </label>

//                     <input
//                       type="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleChange}
//                       className="w-full rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition focus:border-[#173F3A]/30 focus:bg-white"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-sm font-medium">
//                       <FiClock size={15} />
//                       Start time
//                     </label>

//                     <input
//                       type="time"
//                       name="time"
//                       value={formData.time}
//                       onChange={handleChange}
//                       className="w-full rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition focus:border-[#173F3A]/30 focus:bg-white"
//                     />
//                   </div>
//                 </div>

//                 {/* Venue */}

//                 <div>
//                   <label className="mb-2 flex items-center gap-2 text-sm font-medium">
//                     <FiMapPin size={15} />
//                     Venue
//                   </label>

//                   <input
//                     type="text"
//                     name="venue"
//                     value={formData.venue}
//                     onChange={handleChange}
//                     placeholder="The Grand Pavilion"
//                     className="w-full rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition focus:border-[#173F3A]/30 focus:bg-white"
//                   />
//                 </div>

//                 {/* Location */}

//                 <div>
//                   <label className="mb-2 block text-sm font-medium">
//                     Location
//                   </label>

//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder="Lagos, Nigeria"
//                     className="w-full rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition focus:border-[#173F3A]/30 focus:bg-white"
//                   />
//                 </div>

//                 {/* Description */}

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label className="block text-sm font-medium">
//                       Short description
//                     </label>

//                     <span className="text-xs text-[#173F3A]/40">
//                       {formData.shortDescription.length}/220
//                     </span>
//                   </div>

//                   <textarea
//                     name="shortDescription"
//                     value={formData.shortDescription}
//                     onChange={handleChange}
//                     maxLength={220}
//                     rows={4}
//                     placeholder="Tell guests a little about the celebration..."
//                     className="w-full resize-none rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1] px-4 py-3.5 text-sm leading-6 outline-none transition focus:border-[#173F3A]/30 focus:bg-white"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* =========================
//                 PROFILE PHOTO + WELCOME
//             ========================== */}

//             <section className="rounded-[28px] border border-[#173F3A]/10 bg-white p-6 sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C76A4A]">
//                   Make it personal
//                 </p>

//                 <h3 className="mt-2 text-2xl font-semibold">
//                   Your welcome
//                 </h3>
//               </div>

//               <div className="flex flex-col gap-6 sm:flex-row">
//                 {/* Profile Image */}

//                 <div className="shrink-0">
//                   <div className="relative h-32 w-32 overflow-hidden rounded-full bg-[#DCE5E0]">
//                     {profileImage ? (
//                       <img
//                         src={profileImage}
//                         alt="Couple"
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-full w-full items-center justify-center text-[#173F3A]/40">
//                         <FiHeart size={28} />
//                       </div>
//                     )}
//                   </div>

//                   <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 text-xs font-medium text-[#173F3A]">
//                     <FiCamera size={14} />
//                     Change photo

//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={(e) => handleImageUpload(e, "profile")}
//                     />
//                   </label>
//                 </div>

//                 {/* Welcome */}

//                 <div className="flex-1">
//                   <label className="mb-2 block text-sm font-medium">
//                     Welcome message
//                   </label>

//                   <textarea
//                     name="welcomeMessage"
//                     value={formData.welcomeMessage}
//                     onChange={handleChange}
//                     rows={5}
//                     placeholder="Welcome your guests..."
//                     className="w-full resize-none rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1] px-4 py-3.5 text-sm leading-6 outline-none transition focus:border-[#173F3A]/30 focus:bg-white"
//                   />

//                   <p className="mt-2 text-xs text-[#173F3A]/45">
//                     This appears near the beginning of your public website.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* =========================
//                 OUR STORY
//             ========================== */}

//             <section className="rounded-[28px] border border-[#173F3A]/10 bg-white p-6 sm:p-8">
//               <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C76A4A]">
//                     Your journey
//                   </p>

//                   <h3 className="mt-2 text-2xl font-semibold">
//                     Our story
//                   </h3>

//                   <p className="mt-2 max-w-xl text-sm leading-6 text-[#173F3A]/55">
//                     Give your guests a glimpse into the moments that brought
//                     you here.
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={addStorySection}
//                   className="flex w-fit items-center gap-2 rounded-full border border-[#173F3A]/15 px-4 py-2.5 text-sm font-medium transition hover:bg-[#173F3A] hover:text-white"
//                 >
//                   <FiPlus size={16} />
//                   Add section
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 {storySections.map((section, index) => (
//                   <div
//                     key={section.id}
//                     className="rounded-2xl bg-[#F8F6F1] p-5 sm:p-6"
//                   >
//                     <div className="mb-4 flex items-start justify-between gap-4">
//                       <div className="flex flex-1 items-center gap-3">
//                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173F3A] text-xs font-semibold text-white">
//                           {index + 1}
//                         </div>

//                         <input
//                           type="text"
//                           value={section.title}
//                           onChange={(e) =>
//                             updateStoryTitle(
//                               section.id,
//                               e.target.value
//                             )
//                           }
//                           className="w-full bg-transparent text-base font-semibold outline-none"
//                         />
//                       </div>

//                       {storySections.length > 1 && (
//                         <button
//                           type="button"
//                           onClick={() =>
//                             removeStorySection(
//                               section.id,
//                               section.key
//                             )
//                           }
//                           className="flex h-8 w-8 items-center justify-center rounded-full text-[#173F3A]/40 transition hover:bg-white hover:text-[#C76A4A]"
//                         >
//                           <FiTrash2 size={15} />
//                         </button>
//                       )}
//                     </div>

//                     <textarea
//                       name={section.key}
//                       value={formData[section.key] || ""}
//                       onChange={handleChange}
//                       rows={6}
//                       placeholder={`Tell your guests about ${section.title.toLowerCase()}...`}
//                       className="w-full resize-none rounded-2xl border border-[#173F3A]/10 bg-white px-4 py-3.5 text-sm leading-6 outline-none transition focus:border-[#173F3A]/30"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* =========================
//                 SAVE CTA
//             ========================== */}

//             <div className="flex flex-col items-center justify-between gap-4 rounded-[28px] bg-[#173F3A] p-6 text-white sm:flex-row sm:p-8">
//               <div>
//                 <h3 className="text-lg font-semibold">
//                   Ready to update your website?
//                 </h3>

//                 <p className="mt-1 text-sm text-white/60">
//                   Save your changes and they will appear on your event
//                   website.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={handleSave}
//                 className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173F3A] transition hover:bg-[#F1EDE5]"
//               >
//                 <FiCheck size={17} />
//                 Save changes
//               </button>
//             </div>
//           </div>

//           {/* =========================
//               RIGHT SIDEBAR
//           ========================== */}

//           <aside className="space-y-6">
//             {/* =========================
//                 WEBSITE PREVIEW
//             ========================== */}

//             <section className="overflow-hidden rounded-[28px] border border-[#173F3A]/10 bg-white">
//               <div className="border-b border-[#173F3A]/10 p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C76A4A]">
//                       Public website
//                     </p>

//                     <h3 className="mt-2 text-lg font-semibold">
//                       Your event page
//                     </h3>
//                   </div>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F6F1]">
//                     <FiExternalLink size={17} />
//                   </div>
//                 </div>
//               </div>

//               {/* Mini Preview */}

//               <div className="p-5">
//                 <div className="overflow-hidden rounded-2xl border border-[#173F3A]/10 bg-[#F8F6F1]">
//                   <div className="relative h-44 overflow-hidden bg-[#DCE5E0]">
//                     {coverImage ? (
//                       <img
//                         src={coverImage}
//                         alt=""
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-[#173F3A]/35">
//                         <FiImage size={28} />
//                       </div>
//                     )}

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#173F3A]/60 to-transparent" />

//                     <div className="absolute bottom-4 left-4 text-white">
//                       <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
//                         We're getting married
//                       </p>

//                       <p className="mt-1 text-lg font-semibold">
//                         {formData.coupleNames}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="p-4">
//                     <div className="flex items-center gap-2 text-xs text-[#173F3A]/60">
//                       <FiCalendar size={13} />

//                       {formData.date
//                         ? new Date(
//                             formData.date + "T00:00:00"
//                           ).toLocaleDateString("en-US", {
//                             month: "long",
//                             day: "numeric",
//                             year: "numeric",
//                           })
//                         : "Add event date"}
//                     </div>

//                     <div className="mt-2 flex items-center gap-2 text-xs text-[#173F3A]/60">
//                       <FiMapPin size={13} />

//                       {formData.venue || "Add venue"}
//                     </div>

//                     <button
//                       type="button"
//                       className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#173F3A] py-2.5 text-xs font-semibold text-white"
//                     >
//                       RSVP
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-[#173F3A]/15 py-3 text-sm font-medium transition hover:bg-[#173F3A] hover:text-white"
//                 >
//                   <FiEye size={16} />
//                   Preview website
//                 </button>
//               </div>
//             </section>

//             {/* =========================
//                 WEBSITE LINK
//             ========================== */}

//             <section className="rounded-[28px] border border-[#173F3A]/10 bg-white p-6">
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F6F1]">
//                   <FiExternalLink size={17} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold">
//                     Event website
//                   </h3>

//                   <p className="text-xs text-[#173F3A]/45">
//                     Share this with your guests
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-2xl bg-[#F8F6F1] px-4 py-3">
//                 <p className="truncate text-xs font-medium text-[#173F3A]/70">
//                   resvio.app/daniel-and-grace
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 className="mt-3 w-full rounded-full border border-[#173F3A]/15 py-2.5 text-sm font-medium transition hover:bg-[#173F3A] hover:text-white"
//               >
//                 Copy link
//               </button>
//             </section>

//             {/* =========================
//                 WEBSITE SECTIONS
//             ========================== */}

//             <section className="rounded-[28px] border border-[#173F3A]/10 bg-white p-6">
//               <div className="mb-5">
//                 <h3 className="text-sm font-semibold">
//                   Website sections
//                 </h3>

//                 <p className="mt-1 text-xs leading-5 text-[#173F3A]/45">
//                   Choose what guests can see.
//                 </p>
//               </div>

//               <div className="space-y-1">
//                 <SettingToggle
//                   label="Welcome message"
//                   enabled={websiteSettings.showWelcomeMessage}
//                   onClick={() =>
//                     toggleWebsiteSetting("showWelcomeMessage")
//                   }
//                 />

//                 <SettingToggle
//                   label="Our story"
//                   enabled={websiteSettings.showStory}
//                   onClick={() => toggleWebsiteSetting("showStory")}
//                 />

//                 <SettingToggle
//                   label="Photo gallery"
//                   enabled={websiteSettings.showGallery}
//                   onClick={() =>
//                     toggleWebsiteSetting("showGallery")
//                   }
//                 />

//                 <SettingToggle
//                   label="Event details"
//                   enabled={websiteSettings.showEventDetails}
//                   onClick={() =>
//                     toggleWebsiteSetting("showEventDetails")
//                   }
//                 />

//                 <SettingToggle
//                   label="Gift options"
//                   enabled={websiteSettings.showGiftOptions}
//                   onClick={() =>
//                     toggleWebsiteSetting("showGiftOptions")
//                   }
//                 />
//               </div>
//             </section>

//             {/* =========================
//                 EDIT INVITATION NOTE
//             ========================== */}

//             <section className="rounded-[28px] bg-[#E9D8CC] p-6">
//               <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#173F3A]">
//                 <FiEdit3 size={18} />
//               </div>

//               <h3 className="text-lg font-semibold text-[#173F3A]">
//                 Want to change the invitation?
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-[#173F3A]/60">
//                 Your invitation design is managed separately so you can
//                 customize its look without changing your event information.
//               </p>

//               <button
//                 type="button"
//                 className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#173F3A]"
//               >
//                 Edit invitation
//                 <FiArrowLeft
//                   size={15}
//                   className="rotate-180"
//                 />
//               </button>
//             </section>
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// };

// /* =================================
//    SETTING TOGGLE
// ================================= */

// const SettingToggle = ({ label, enabled, onClick }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left transition hover:bg-[#F8F6F1]"
//     >
//       <span className="text-sm font-medium">{label}</span>

//       <span
//         className={`relative h-6 w-11 rounded-full transition ${
//           enabled ? "bg-[#173F3A]" : "bg-[#173F3A]/15"
//         }`}
//       >
//         <span
//           className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
//             enabled ? "left-6" : "left-1"
//           }`}
//         />
//       </span>
//     </button>
//   );
// };

// export default Profile;