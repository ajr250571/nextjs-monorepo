"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
};

export default function ProjectNewPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <div className="flex h-[calc(100vh-5rem)] w-auto items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl text-primary font-semibold">
            Create Project
          </h1>
          <label className="form-control w-96 max-w-xs">
            <div className="label">
              <span className="label-text">Project Title</span>
            </div>
            <input
              type="text"
              placeholder="Project Title"
              className="input input-bordered w-full max-w-xs input-sm"
              {...register("title", { required: "Title requered" })}
            />
            {errors.title && (
              <div className="label">
                <span className="label-text-alt text-error text-xs">
                  {errors.title?.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-96 max-w-xs">
            <div className="label">
              <span className="label-text">Project Descriptión</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Project Descriptión"
              {...register("description")}
            ></textarea>
            {errors.description && (
              <div className="label">
                <span className="label-text-alt  text-error text-xs">
                  {errors.description?.message}
                </span>
              </div>
            )}
          </label>
          <button className="btn btn-primary btn-sm w-full mt-2" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
