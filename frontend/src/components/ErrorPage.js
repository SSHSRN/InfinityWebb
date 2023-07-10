import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1 className='errorHeading'>Oops! Page Not Found</h1>
      <div className='errorContentDiv'>
        <p className="errorContent1">
          It seems that the page you are looking for does not exist.<br />
        </p>
        <p className="errorContent2">In the meantime, let's go back to the homepage and start over. <a href="/">Go to Homepage</a></p>
      </div>
      <img src={'assets/error.png'} alt="404 Error" className='errorImg' />
    </div>
  );
};

export default ErrorPage
