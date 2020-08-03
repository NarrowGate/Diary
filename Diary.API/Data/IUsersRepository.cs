using System;
using System.Collections.Generic;
using Diary.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Diary.API.Data
{
    public interface IUsersRepository
    {
        public IEnumerable<User> GetUsers();
        public User GetUser(int id);

    }
}
