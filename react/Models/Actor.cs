﻿using Microsoft.AspNetCore.Identity;

public class Actor
{
    public Actor()
    {
        Groups = new List<Group>();
    }
    public int Id { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public string? StageName { get; set; }
    public virtual IdentityUser IdentityUser { get; set; }
    public virtual List<Group> Groups { get; private set; }
}
