export const Section = ({ title, children, ...rest }) => {
  // 🧠 Logic

  return (
    <>
      <section {...rest}>
        <h2 className="text-4xl font-bold text-emerald-800 mb-6">{title}</h2>
        {children}
      </section>
    </>
  );
};
