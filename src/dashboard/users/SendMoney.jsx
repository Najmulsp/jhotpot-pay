import { RiMoneyPoundBoxFill } from "react-icons/ri";

const SendMoney = () => {
  const handleSendMoney = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const amount = e.target.amount.value;
  };

  return (
    <div>
      <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center pl-16 text-6xl tracking-tighter font-bold">
              Jhotpot Pay
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Send money is very easy here</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-blue-500 dark:text-gray-50 dark:border-gray-600"
            >
              <RiMoneyPoundBoxFill />
            </a>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Send Money Here</h1>
        <form noValidate="" action="" className="space-y-6">
          {/* number */}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Number
            </label>
            <input
              type="number"
              name="number"
              id="username"
              placeholder="Enter number where to send"
              className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* amount */}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="username"
              placeholder="Enter amount here"
              className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* password */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button
            onClick={handleSendMoney()}
            className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
