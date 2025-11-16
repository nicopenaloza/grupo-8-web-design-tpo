import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import {
	ArrowUpRightIcon,
	ChatBubbleLeftRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, type FC } from "react";

type FAQ = {
	question: string;
	answer: string;
};

type ChatModalProps = {
	open: boolean;
	onClose: () => void;
	faqs: FAQ[];
};

const ChatModal: FC<ChatModalProps> = ({ open, onClose, faqs }) => (
	<Transition
		show={open}
		as={Fragment}
	>
		<Dialog
			as="div"
			className="relative z-50"
			onClose={onClose}
			open={open}
			static
		>
			<TransitionChild
				as={Fragment}
				enter="ease-out duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="fixed inset-0 bg-[#2a1f16]/45 backdrop-blur-sm" />
			</TransitionChild>

			<div className="fixed inset-0">
				<div className="flex min-h-full items-end justify-center px-4 pb-16 pt-12 text-center sm:items-center">
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-surface text-left align-middle shadow-xl transition-all">
							<div className="flex items-center justify-between border-b px-6 py-4">
								<div className="flex items-center gap-3">
									<span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
										<ChatBubbleLeftRightIcon
											className="h-5 w-5"
											aria-hidden
										/>
									</span>
									<div>
										<DialogTitle className="text-base font-semibold text-text">
											Galería Urbana bot
										</DialogTitle>
										<p className="text-xs text-text-muted">
											Respondemos al instante tus dudas
											frecuentes.
										</p>
									</div>
								</div>
								<button
									type="button"
									onClick={onClose}
									className="rounded-full p-2 text-text-muted transition hover:bg-muted hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
								>
									<span className="sr-only">
										Cerrar chatbot
									</span>
									<XMarkIcon
										className="h-5 w-5"
										aria-hidden
									/>
								</button>
							</div>

							<div className="space-y-4 px-6 py-5 overflow-y-auto h-[70vh]">
								<div className="rounded-xl border border-border bg-muted/60 p-4 text-sm text-text-muted">
									<p className="font-medium text-text">
										Consultas frecuentes
									</p>
									<p>
										Elegí una pregunta para ver la respuesta
										o escribinos tu consulta.
									</p>
								</div>

								<div className="space-y-3">
									{faqs.map((faq) => (
										<details
											key={faq.question}
											className="group rounded-xl border border-border bg-surface transition hover:border-primary/50"
										>
											<summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-text transition group-open:text-primary">
												<span>{faq.question}</span>
												<ArrowUpRightIcon
													aria-hidden
													className="h-4 w-4 shrink-0 text-text-muted transition group-open:rotate-45 group-open:text-primary"
												/>
											</summary>
											<div className="px-4 pb-4 text-sm text-text-muted">
												{faq.answer}
											</div>
										</details>
									))}
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</Transition>
);

export default ChatModal;
