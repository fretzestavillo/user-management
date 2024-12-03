import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from '../tools/type';

export default function User() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('userName', { required: true })} />
      {errors.userName && <span>This field is required</span>}
      <input {...register('userEmail', { required: true })} />
      {errors.userEmail && <span>This field is required</span>}
      <input {...register('age', { required: true })} />
      {errors.age && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
