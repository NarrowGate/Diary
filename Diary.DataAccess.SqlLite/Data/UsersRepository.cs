using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diary.Core.Contracts;
using Diary.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Diary.DataAccess.SqlLite.Data
{
    public class UsersRepository : IUsersRepository
    {
        private readonly DataContext _context;

        public UsersRepository(DataContext context)
        {
            _context = context;
        }

        public User GetUser(int id)
        {
            return _context.Users.FirstOrDefault(x => x.Id == id);     
        }

        public IEnumerable<User> GetUsers()
        {
            return _context.Users;
        }
    }
}
