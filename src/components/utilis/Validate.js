export const Validationfun = ({email, password}) => {
    // console.log(email, password); // Check what values are received
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const validpassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    // console.log(mailformat, validpassword); // Check the results of regex tests
    if (!mailformat) return "Email is Not Valid";
    if (!validpassword) return "Password is Not Correct";
    return null;
}
