export default function Figure({ data }) {
  const { url, desc } = data;
  return (
    <figure>
      <img alt={desc} src={url} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}
