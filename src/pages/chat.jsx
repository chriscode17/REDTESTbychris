import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../utils/style/colors';
import advice from '../assets/advice.png';

// --- Animations ---
const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-4px); }
`;

// --- Styles Généraux & Layout ---
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.backgroundLight};
  color: ${colors.five};
  overflow: hidden;
  box-sizing: border-box;
`;

const HeaderTop = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 24px;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
`;

const Redai = styled.img`
  opacity: 0.8;
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50%;
`;

const Titre1 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.five};
  margin: 0;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px 24px 16px;
  box-sizing: border-box;
  overflow: hidden;
`;

// --- Écran d'accueil (Centré) ---
const WelcomeScreen = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 20px 0;
`;

const Heading = styled.h1`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: bold;
  margin: 0;
  color: ${colors.five};
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: clamp(14px, 2vw, 18px);
  color: rgba(0, 0, 0, 0.5);
  max-width: 500px;
`;

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
  max-width: 600px;
  margin-top: 30px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SuggestionButton = styled.button`
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  padding: 14px 16px;
  text-align: left;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${colors.four};
    background-color: ${colors.primary};
    color: ${colors.five};
    transform: translateY(-2px);
  }
`;

// --- Zone de Conversation ---
const MessagesContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

const MessagesInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$isUser ? 'flex-end' : 'flex-start')};
  width: 100%;
`;

const MessageBubble = styled.div`
  max-width: 75%;
  border-radius: 18px;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.5;
  background-color: ${(props) => (props.$isUser ? colors.secondary : '#ffffff')};
  color: ${(props) => (props.$isUser ? '#ffffff' : colors.five)};
  border: ${(props) => (props.$isUser ? 'none' : '1px solid rgba(0, 0, 0, 0.08)')};
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
`;

const FileTag = styled.div`
  margin-bottom: 6px;
  font-size: 12px;
  opacity: 0.85;
`;

const TypingBubble = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 18px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 14px 16px;
`;

const Dot = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${colors.thirdly};
  animation: ${bounce} 1.2s infinite ease-in-out;
  animation-delay: ${(props) => props.$delay || '0ms'};
`;

// --- Zone de Saisie (Input) ---
const InputSection = styled.div`
  width: 100%;
  padding-top: 10px;
`;

const InputInner = styled.div`
  width: 100%;
`;

const AttachedFileRow = styled.div`
  margin-bottom: 8px;
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 6px 12px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;

const RemoveFileButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:hover {
    color: ${colors.thirdly};
  }
`;

const InputBox = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: border-color 0.15s ease;

  &:focus-within {
    border-color: ${colors.secondary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  max-height: 150px;
  resize: none;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${colors.five};
  outline: none;
  font-family: inherit;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const InputBottomRow = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const AttachButton = styled.button`
  display: flex;
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${colors.primary};
  }
`;

const ModelBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  border: 1px solid ${colors.four};
  padding: 4px 10px;
  font-size: 12px;
  color: ${colors.thirdly};
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: none;
  border-radius: 12px;
  background-color: ${colors.secondary};
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover:enabled {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

// --- Données ---
const SUGGESTIONS = [
  "Quels sont les symptômes du paludisme ?",
  "Différence entre anémie et drépanocytose ?",
  "Comment lire un résultat de test rapide ?",
  "Que faire en cas de suspicion d'anémie ?",
];

const API_URL = 'http://localhost:8000/api/chat';

// --- Composant ---
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 150) + 'px';
  }, [input]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed && !attachedFile) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: trimmed,
      file: attachedFile ? attachedFile.name : null,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setAttachedFile(null);
    setIsTyping(true);

    try {
      const formData = new FormData();
      formData.append('message', trimmed);
      if (attachedFile) formData.append('file', attachedFile);

      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Erreur API : ${res.status}`);

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content: "Je n'arrive pas à contacter le serveur RAG. Vérifie que l'API tourne et que API_URL est correct.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setAttachedFile(file);
    e.target.value = '';
  };

  const hasMessages = messages.length > 0;
  const canSend = input.trim().length > 0 || attachedFile !== null;

  return (
    <Wrapper>
      <HeaderTop>
        <Redai src={advice} alt='advice' />
        <Titre1>redAI</Titre1>
      </HeaderTop>

      <Main>
        {!hasMessages ? (
          <WelcomeScreen>
            <Heading>Que puis-je faire ?</Heading>
            <Subtitle>Pose une question sur une pathologie, un résultat, ou encore une idée.</Subtitle>
            <SuggestionsGrid>
              {SUGGESTIONS.map((s) => (
                <SuggestionButton key={s} onClick={() => sendMessage(s)}>
                  {s}
                </SuggestionButton>
              ))}
            </SuggestionsGrid>
          </WelcomeScreen>
        ) : (
          <MessagesContainer>
            <MessagesInner>
              {messages.map((m) => (
                <MessageRow key={m.id} $isUser={m.role === 'user'}>
                  <MessageBubble $isUser={m.role === 'user'}>
                    {m.file && <FileTag>📎 {m.file}</FileTag>}
                    {m.content}
                  </MessageBubble>
                </MessageRow>
              ))}
              {isTyping && (
                <MessageRow $isUser={false}>
                  <TypingBubble>
                    <Dot $delay="0ms" />
                    <Dot $delay="150ms" />
                    <Dot $delay="300ms" />
                  </TypingBubble>
                </MessageRow>
              )}
              <div ref={bottomRef} />
            </MessagesInner>
          </MessagesContainer>
        )}

        <InputSection>
          <InputInner>
            {attachedFile && (
              <AttachedFileRow>
                {attachedFile.name}
                <RemoveFileButton onClick={() => setAttachedFile(null)}>
                  ✕
                </RemoveFileButton>
              </AttachedFileRow>
            )}
            <InputBox>
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="redAI pour vous servir..."
              />
              <InputBottomRow>
                <LeftControls>
                  <HiddenFileInput ref={fileInputRef} type="file" onChange={handleFileChange} />
                  <AttachButton onClick={() => fileInputRef.current?.click()} title="Joindre un fichier">
                    📁
                  </AttachButton>
                  <ModelBadge>redAI</ModelBadge>
                </LeftControls>
                <SendButton onClick={() => sendMessage(input)} disabled={!canSend}>
                  Envoyer
                </SendButton>
              </InputBottomRow>
            </InputBox>
          </InputInner>
        </InputSection>
      </Main>
    </Wrapper>
  );
}