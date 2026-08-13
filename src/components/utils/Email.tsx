export const Email = () => {
  const user = 'runscrapmonkeyrun';
  const domain = 'gmail.com';

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${user}@${domain}`;
      }}
    >
      {/* Renders the text seamlessly for humans via JS execution */}
      {user} [at] {domain}
    </a>
  );
};
