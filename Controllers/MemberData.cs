using System;
using System.Collections.Generic;
using System.Linq;
using Diary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Diary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MemberDataController : ControllerBase
    {
        private static readonly string[] Summaries = new []
        {
            "Member 1", "Member 2", "Member 3"
        };

        private readonly ILogger<MemberDataController> _logger;

        public MemberDataController(ILogger<MemberDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Member> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 2).Select(index => new Member
            {                
                Id = rng.Next(-20, 55),
                Name = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}