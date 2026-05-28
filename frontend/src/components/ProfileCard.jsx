const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 mt-10 text-white">

      <h2 className="text-3xl font-bold mb-6">
        User Profile
      </h2>

      <div className="space-y-4 text-lg">

        <p>
          <span className="font-semibold text-cyan-400">
            Username:
          </span>{" "}
          {user?.user}
        </p>

        <p>
          <span className="font-semibold text-cyan-400">
            Account Number:
          </span>{" "}
          {user?.account_number}
        </p>

        <p>
          <span className="font-semibold text-cyan-400">
            Balance:
          </span>{" "}
          ₹{user?.balance}
        </p>

      </div>

    </div>
  );
};

export default ProfileCard;