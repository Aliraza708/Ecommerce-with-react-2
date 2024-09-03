function Contact(){
    return(<div className="bg-gray-100 text-gray-700">
        <section className="container mx-auto p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed">
              Have any questions or need help? We're here to assist you. Feel free to
              reach out to us using the form below or through our contact information.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <form action="#" method="post">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-base leading-relaxed mb-4">
                You can also reach us at the following contact details:
              </p>
              <ul className="list-none text-base">
                <li className="mb-2">
                  <strong>Email:</strong> support@example.com
                </li>
                <li className="mb-2">
                  <strong>Phone:</strong> +123 456 7890
                </li>
                <li className="mb-2">
                  <strong>Address:</strong> 123 E-Commerce St, Shopville, Pak
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      )
}

export default Contact