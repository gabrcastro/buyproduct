import { useEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Função que verifica o tamanho da tela
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Adiciona o listener para o evento de resize
    window.addEventListener("resize", handleResize);

    // Chama a função uma vez no início para garantir o estado inicial correto
    handleResize();

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Array de dependências vazio, pois só queremos rodar isso na montagem/desmontagem

  return isMobile;
};

export default useIsMobile;
