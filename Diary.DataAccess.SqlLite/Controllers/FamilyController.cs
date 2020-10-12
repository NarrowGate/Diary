using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diary.DataAccess.SqlLite.Data;
using Diary.Core.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Diary.DataAccess.SqlLite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FamilyController : ControllerBase
    {
        private readonly IFamilyRepository _familyRepository;

        public FamilyController(IFamilyRepository familyRepository)
        {
            _familyRepository = familyRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetFamily(int id)
        {
            var family = _familyRepository.GetFamily(id);
            return Ok(family);
        }
    }
}