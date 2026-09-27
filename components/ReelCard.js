export default function ReelCard({ item }) {
  const tags = [item.brand, item.capacity, item.date].filter(Boolean);

  return (
    <article className="reel-card">
      <div className="reel-media">
        {item.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={item.poster}
            aria-label={item.title}
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={item.poster}
            alt={item.title}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className="reel-body">
        {tags.length > 0 ? <span className="reel-tag">{tags.join(" / ")}</span> : null}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.instagramUrl ? (
          <a
            className="btn btn-secondary"
            href={item.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on Instagram
          </a>
        ) : null}
      </div>
    </article>
  );
}
