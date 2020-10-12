using System;
using System.Collections.Generic;
using Diary.Core.Models;

namespace Diary.Core.Contracts
{
    public interface IUsersRepository
    {
        public IEnumerable<User> GetUsers();
        public User GetUser(int id);

    }
}
