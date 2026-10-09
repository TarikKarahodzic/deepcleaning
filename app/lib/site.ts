export type Service = { name: string; detail: string; category: string };

export const services: Service[] = [
  { name: "Ugaona garnitura", detail: "Za omiljeno mjesto cijele porodice.", category: "Garniture" },
  { name: "Trosjed", detail: "Svježina za vaše svakodnevne trenutke.", category: "Garniture" },
  { name: "Dvosjed", detail: "Mali prostor. Velika razlika.", category: "Garniture" },
  { name: "Madrac", detail: "Pažnja koju zaslužuje vaš odmor.", category: "Madraci" },
  { name: "Fotelja", detail: "Osvježite svoj kutak za opuštanje.", category: "Fotelje i stolice" },
  { name: "Stolica", detail: "Čišćenje po komadu.", category: "Fotelje i stolice" },
];

export const serviceCategories = ["Sve usluge", "Garniture", "Madraci", "Fotelje i stolice"];

export function whatsapp(message = "Zdravo, želim dogovoriti dubinsko čišćenje.") {
  return `https://wa.me/387603402938?text=${encodeURIComponent(message)}`;
}
