interface EmailProps {
  className?: string;
}

export function Email({ className }: EmailProps) {
  const user = 'runscrapmonkeyrun';
  const domain = 'gmail.com';
  const fullEmail = `${user}@${domain}`;

  return (
    <a href={`mailto:${fullEmail}`} className={className}>
      {user} [at] {domain}
    </a>
  );
}
