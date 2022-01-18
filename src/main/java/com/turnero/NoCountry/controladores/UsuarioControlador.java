
package com.turnero.NoCountry.controladores;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/user")
public class UsuarioControlador {
    
    
    //@Autowired
    //private UsuarioServicio usuarioServicio;
    
    @GetMapping("/list")
    public String listarUsuarios(Model model,@RequestParam(required = false) String q) {
        if (q != null) {
            //model.addAttribute("usuarios", usuarioServicio.listAll(q));
        }else{
            //model.addAttribute("usuarios", usuarioServicio.listAll());
        }
        return "user-list";
    }
}
