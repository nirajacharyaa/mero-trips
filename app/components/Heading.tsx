"use client";
interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <h4 className="font-light mt-2 text-neutral-500">{subtitle}</h4>
    </div>
  );
};

export default Heading;
