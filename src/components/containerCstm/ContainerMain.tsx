import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerCustom: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto flex justify-center items-center bg-white sm:overflow-hidden container-main-custom">
      {children}
    </div>
  );
};

export default ContainerCustom;
