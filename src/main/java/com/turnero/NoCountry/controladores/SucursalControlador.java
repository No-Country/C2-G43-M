
package com.turnero.NoCountry.controladores;

import com.turnero.NoCountry.entidades.Sucursal;
import com.turnero.NoCountry.excepciones.WebException;
import com.turnero.NoCountry.servicios.SucursalServicio;
import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
@RequestMapping("/sucursal")
public class SucursalControlador {
    
     @Autowired
    private SucursalServicio sucursalServicio;

   

    
    //@PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping("/list")
    public String listarSucursales(Model model, @RequestParam(required = false) String q) {
        if (q != null) {
            model.addAttribute("sucursales", sucursalServicio.listallByQ(q));
        } else {
            model.addAttribute("sucursales", sucursalServicio.listAll());
        }
        return "sucursal-list";
    }

    @GetMapping("/form")
    public String crearSucursal(Model model, @RequestParam(required = false) String id) {
        if (id != null) {
            Optional<Sucursal> optional = sucursalServicio.findById(id);
            if (optional.isPresent()) {
                model.addAttribute("sucursal", optional.get());
            } else {
                return "redirect:/sucursal/list";
            }
        } else {
            model.addAttribute("sucursal", new Sucursal());
        }/*
        model.addAttribute("ciudades", ciudadServicio.listAll());
        model.addAttribute("provincias", provinciaServicio.listAll());
        
        
        */
        return "sucursal-form";
    }

    @PostMapping("/save")
    public String guardarSucursal(Model model, RedirectAttributes redirectAttributes, Sucursal sucursal) throws IOException {

        try {
            sucursalServicio.save(sucursal);
            redirectAttributes.addFlashAttribute("error", "Primer paso completado exitosamente");
        } catch (WebException ex) {
            model.addAttribute("error", ex.getMessage());
            model.addAttribute("sucursal", sucursal);
            /*
        model.addAttribute("ciudades", ciudadServicio.listAll());
        model.addAttribute("provincias", provinciaServicio.listAll());
        */
            return "sucursal-form";
        }
        return "redirect:/";
    }

    @GetMapping("/delete")
    public String delete(@RequestParam(required = true) String id) {
        sucursalServicio.deleteById(id);
        return "redirect:/sucursal/list";
    }

  
}
