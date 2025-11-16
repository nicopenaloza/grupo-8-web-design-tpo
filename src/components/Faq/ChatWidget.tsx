import { useContext } from "react";
import { FaqWidgetProvider } from "../../providers/FaqWidgetProvider";
import ChatButton from "./ChatButton";
import ChatModal from "./ChatModal";

const faqs = [
	{
		question: "¿Cuáles son los horarios de apertura y cierre?",
		answer: "Galería Urbana abre todos los días de 10:00 a 22:00. Los locales gastronómicos del patio pueden extender hasta las 00:00 los fines de semana.",
	},
	{
		question: "¿Dónde puedo estacionar y hay cargadores eléctricos?",
		answer: "Contamos con estacionamiento inteligente en subsuelo -2 con 200 cocheras, 12 cargadores eléctricos y lockers para bicicletas.",
	},
	{
		question: "¿Los eventos requieren inscripción previa?",
		answer: "La mayoría de los eventos son gratuitos con aforo limitado. Podés registrarte desde la agenda del sitio o en recepción (Nivel 1).",
	},
	{
		question: "¿Hay espacios para trabajar o estudiar?",
		answer: "Sí, el Cowork Creative Hub (Nivel 2) ofrece puestos flexibles, salas de reunión y wifi de alta velocidad. Reservas desde la sección Servicios.",
	},
	{
		question: "¿Aceptan mascotas?",
		answer: "Las mascotas son bienvenidas en espacios comunes y locales pet-friendly identificados. Contamos con bebederos y áreas de descanso.",
	},
];

const ChatWidget = () => {
	const { open, setOpen } = useContext(FaqWidgetProvider);

	return (
		<>
			<ChatButton onClick={() => setOpen(true)} />
			<ChatModal
				open={open}
				onClose={() => setOpen(false)}
				faqs={faqs}
			/>
		</>
	);
};

export default ChatWidget;
