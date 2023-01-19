namespace back.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Name { get; set; }
 
       public string Apelidos { get; set; }


        public Cliente() { }
        public Cliente(int id, string name, string apelidos)
        {
            this.Id = id;
            this.Name = name;
            this.Apelidos = apelidos;
        }
    }
}
