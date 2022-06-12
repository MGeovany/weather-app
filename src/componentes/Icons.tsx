export const Icons = (props: any) => {
  switch (props.props) {
    case "clear sky":
      return (
        <div className="icons-icon">
          <img src="/assets/sun/26.png" alt="clear" />
        </div>
      );
    case "few clouds":
      return (
        <div className="icons-icon">
          <img src="/assets/sun/27.png" alt="few" />
        </div>
      );
    case "scattered clouds":
      return (
        <div className="icons-icon">
          <img src="/assets/sun/4.png" alt="scattered" />
        </div>
      );
    case "broken clouds":
      return (
        <div className="icons-icon">
          <img src="/assets/cloud/35.png" alt="broken" />
        </div>
      );
    case "shower rain":
      return (
        <div className="icons-icon">
          <img src="/assets/sun/8.png" alt="shower" />
        </div>
      );
    case "light rain":
      return (
        <div className="icons-icon">
          <img src="/assets/cloud/22.png" alt="rain" />
        </div>
      );
    case "thunderstorm":
      return (
        <div className="icons-icon">
          <img src="/assets/cloud/17.png" alt="thunderstorm" />
        </div>
      );
    case "snow":
      return (
        <div className="icons-icon">
          <img src="/assets/cloud/23.png" alt="snow" />
        </div>
      );
    case "mist":
      return (
        <div className="icons-icon">
          <img src="/assets/cloud/29.png" alt="mist" />
        </div>
      );

    default:
      return (
        <div className="icons-icon">
          <img src="/assets/star/38.png" alt="sun" />
        </div>
      );
  }
};
