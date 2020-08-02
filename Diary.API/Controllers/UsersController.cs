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
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = _context.Users.ToList();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == id);
            return Ok(user);
        }
    }
}