import { User } from './../../../entities/User';
import { testUsersRepository } from "../../../repositories";

const usersRepository = testUsersRepository;

describe('Create User', () => {

  it('should create a user in the database', async () => {
    const userObj = new User({
      name: 'Felipe',
      email: 'felipe@gmail.com',
      password: '123',
    });

    const theId = userObj.id;

    await usersRepository.save(userObj);

    const gettingUser = await usersRepository.findById(theId);

    expect(gettingUser).toBe(userObj);
  })

});