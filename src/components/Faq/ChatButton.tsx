import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';

type ChatButtonProps = {
  onClick: () => void;
};

const ChatButton: FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Abrir chatbot de asistencia"
      className="fixed bottom-6 right-4 z-40 flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-subtle transition-all duration-200 hover:bg-secondary focus-visible:ring-4 focus-visible:ring-primary/40 sm:bottom-8 sm:right-8"
    >
      <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" aria-hidden />
      <span>¿Necesitás ayuda?</span>
    </button>
  );
};

export default ChatButton;

