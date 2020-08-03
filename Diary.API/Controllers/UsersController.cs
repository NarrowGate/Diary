using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diary.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Diary.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _usersRepository;

        public UsersController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = _usersRepository.GetUsers().ToList();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _usersRepository.GetUsers().FirstOrDefault(x => x.Id == id);
            return Ok(user);
        }
    }
}