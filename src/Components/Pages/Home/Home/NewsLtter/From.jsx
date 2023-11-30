import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic'
const From = () => {
  const axiosPublic = useAxiosPublic()
    const handleNews = async e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const name = form.get("name")
        console.log(email, name);
        const subscriber = {
          name : name,
          email : email,
         
        }
        const res = await axiosPublic.post('/sub', subscriber)
        console.log(res.data);
        if (res.data.insertedId) {
          // form.reset();
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Welcome to Alpha ${subscriber.name} `,
              showConfirmButton: false,
              timer: 1500
            });

      }
    }
  return (
    <form onSubmit={handleNews} className="card-body">
      <div className="form-control">
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input rounded-none input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input rounded-none input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6 items-end">
        <button className="btn w-1/2 text-white border-black rounded-none bg-[#f47520] ">Subscribe</button>
      </div>
    </form>
  );
};

export default From;
