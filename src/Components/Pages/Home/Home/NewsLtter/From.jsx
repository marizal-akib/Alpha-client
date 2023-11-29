const From = () => {
    const handleNews = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const name = form.get("name")
        console.log(email, name);
    }
  return (
    <form onSubmit={handleNews} className="card-body">
      <div className="form-control">
        
        <input
          type="text"
          placeholder="Name"
          className="input rounded-none input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <input
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
