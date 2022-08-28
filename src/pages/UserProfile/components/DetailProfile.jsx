import { useSelector } from "react-redux";

const getProfileFromFullName = (fullName) => {
  const names = fullName.split(" ");

  if (names.length < 2) return fullName.slice(0, 2).toUpperCase();
  return `${names[0][0]}${names[1][0]}`;
};

function DetailProfile() {
  const { data: user } = useSelector((state) => state.user);

  return (
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">Profil Peneliti</h1>
      <div className="ml-8 mt-5 flex sm:gap-5 lg:gap-20">
        {user.pictureUrl ? (
          <img
            className="h-40 w-40 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        ) : (
          // TODO: Fix Responsive
          <div className="my-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 lg:ml-8 lg:h-40 lg:w-40">
            <div className=" text-xl text-primary md:text-3xl lg:text-7xl">
              {getProfileFromFullName(user.fullName)}
            </div>
          </div>
        )}
        <div className="grid grid-cols-[1fr_2fr]">
          <dd className="text-base font-medium text-gray-500 sm:w-40 sm:shrink-0">
            Name
          </dd>
          <dt className="text-base text-gray-900">{user.fullName}</dt>
          <dd className="text-base font-medium text-gray-500 sm:w-40 sm:shrink-0">
            Email
          </dd>
          <dt className="text-base text-gray-900">{user.email}</dt>
          <dd className="text-base font-medium text-gray-500 sm:w-40 sm:shrink-0">
            Faculty
          </dd>
          <dt className="text-base text-gray-900">{user.faculty}</dt>
          <dd className="text-base font-medium text-gray-500 sm:w-40 sm:shrink-0">
            Major
          </dd>
          <dt className="text-base text-gray-900">{user.major}</dt>
          <dd className="text-base font-medium text-gray-500 sm:w-40 sm:shrink-0">
            Speciality
          </dd>
          <dt className="text-base text-gray-900">
            {user.specialities.reduce((prev, curr) => `${prev}, ${curr}`)}
          </dt>
        </div>
      </div>
    </div>
  );
}

export default DetailProfile;
