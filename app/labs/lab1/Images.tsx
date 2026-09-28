/* eslint-disable @next/next/no-img-element */

export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading another remote image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="The Blue Marble, Earth seen from Apollo 17"
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
      />
      <br />
      My image:
      <br />
      <img
        id="wd-your-image"
        height="200px"
        alt="Earth"
        src="/images/earth.jpg"
      />
    </div>
  );
}
