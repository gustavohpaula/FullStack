package resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONObject;

import entities.Fornecedor;
import repository.FornecedorRepository;


@Path("api")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class FornecedorResource {

	FornecedorRepository fornec = new FornecedorRepository();
	
	@GET
	public List<Fornecedor> get() {
		return fornec.GetAll();
	}

	@POST
	@Path("/add")
	public Response post(Fornecedor fornecedor) {

		try {
			String retorno = fornec.Add(fornecedor);
			return Response.status(Response.Status.CREATED).entity(JSONObject.quote(retorno)).build();
		} catch (Exception e) {
			return Response.status(Response.Status.UNAUTHORIZED).entity(JSONObject.quote(e.getMessage())).build();
		}
	}

	@PUT
	@Path("/edit")
	public Response put(Fornecedor fornecedor) {

		Fornecedor f = fornec.Get(fornecedor.getCnpj());
		if (f == null) {
			return Response.status(Response.Status.NOT_FOUND).entity(JSONObject.quote("CNPJ não encontrado")).build();
		}
		try {
			fornecedor.setCnpj(fornecedor.getCnpj());
			String retorno = fornec.Edit(fornecedor);
			return Response.status(Response.Status.CREATED).entity(JSONObject.quote(retorno)).build();
		} catch (Exception e) {
			return Response.status(Response.Status.UNAUTHORIZED).entity(JSONObject.quote(e.getMessage())).build();
		}
	}

	@DELETE
	@Path("/remove")
	public Response delete(Fornecedor fornecedor) {

		Fornecedor f = fornec.Get(fornecedor.getCnpj());
		if (f == null) {
			return Response.status(Response.Status.NOT_FOUND).entity(JSONObject.quote("CNPJ não encontrado")).build();
		}
		try {
			fornec.Delete(fornecedor.getCnpj());
			return Response.status(Response.Status.OK).entity(JSONObject.quote("Cadastro do fornecedor removido")).build();
		} catch (Exception e) {
			return Response.status(Response.Status.UNAUTHORIZED).entity(JSONObject.quote(e.getMessage())).build();
		}
	}

}
