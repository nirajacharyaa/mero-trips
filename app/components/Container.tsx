"use client";
interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4  md:px-10 lg:px-14 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
