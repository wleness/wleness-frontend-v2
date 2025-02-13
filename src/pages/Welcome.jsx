import Logo from "../assets/Logo.png";
import Template from "../assets/Template.png";

const Welcome = () => {
  const containerStyles = {
    backgroundImage: `url(${Template})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem", // Adjust the margin as per your requirement
  };

  return (
    <div style={containerStyles}>
      <div style={logoContainerStyles}>
        <img
          src={Logo}
          alt=""
          className="w-96 object-cover md:min-w-fit lg:w-[658px]"
        />
      </div>
      <div className="text-center">
        <span className="text-6xl font-bold leading-tight">Welcome Back!</span>
        <p className="my-6 w-96 text-xl leading-relaxed text-gray-400">
          To stay connected with us, please{" "}
          <span className="font-bold text-teal-400">Login</span> with your
          personal information.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
