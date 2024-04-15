import React from "react"

function card(props) {
  const { cardTitle, cardSubtitle, link, url } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title" style={{ color: "#ff8a00" }}>
            {cardTitle}
          </h2>
          <p className="card-text">{cardSubtitle}</p>
          <a href={link} className="card-link">
            See
          </a>
          {url !== "none" && (
            <a
              href={url}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              app
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default card
