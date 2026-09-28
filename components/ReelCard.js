export default function ReelCard({ item }) {
  const tags = [item.handle, item.brand, item.capacity, item.date].filter(Boolean);
  const hasMedia = Boolean(item.video || item.poster);

  return (
    <article className="reel-card">
      <div className={`reel-media${hasMedia ? "" : " reel-media-plain"}`}>
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
        ) : item.poster ? (
          <img
            src={item.poster}
            alt={item.title}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <a
            className="reel-media-ig"
            href={item.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} on Instagram`}
          >
            <InstagramIcon />
            <span>{item.handle || "Instagram"}</span>
            <em>Reel</em>
          </a>
        )}
      </div>
      <div className="reel-body">
        {tags.length > 0 ? <span className="reel-tag">{tags.join(" / ")}</span> : null}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.instagramUrl ? (
          <a
            className="btn btn-primary"
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

function InstagramIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
