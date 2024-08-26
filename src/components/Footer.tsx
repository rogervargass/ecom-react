import { assets } from "../assets/assets";

function Footer() {
  return (
    <section>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src={assets.logo}
            alt="logo do e-commerce no footer"
            className="mb-5 w-32 "
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            corporis excepturi numquam, sed sit nam inventore, cupiditate eaque
            aperiam ab libero, enim neque consectetur pariatur aspernatur
            nesciunt et repellat provident delectus? Quia amet adipisci minima
            quidem ex totam perferendis a qui. Dignissimos totam enim corrupti!
            Alias, laboriosam. Tempore, dicta quidem!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-123-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
