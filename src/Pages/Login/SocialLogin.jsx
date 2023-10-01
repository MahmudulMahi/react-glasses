import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const {googleLogin}=useContext(AuthContext)

    const handleSocialLogin=(media)=>{
        media()
        .then(res=>console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button
                onClick={()=>handleSocialLogin(googleLogin)}
                className="btn btn-neutral btn-sm">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;