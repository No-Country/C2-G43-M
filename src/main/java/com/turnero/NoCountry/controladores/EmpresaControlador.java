/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.turnero.NoCountry.controladores;

import com.turnero.NoCountry.entidades.Empresa;
import com.turnero.NoCountry.excepciones.WebException;
import com.turnero.NoCountry.servicios.EmpresaServicio;
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

/**
 *
 * @author Rodrigo Caro
 */

@Controller
@RequestMapping("/empresa")
public class EmpresaControlador {
     @Autowired
    private EmpresaServicio empresaServicio;

   

    
    //@PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping("/list")
    public String listarEmpresas(Model model, @RequestParam(required = false) String q) {
        if (q != null) {
            model.addAttribute("empresas", empresaServicio.listallByQ(q));
        } else {
            model.addAttribute("empresas", empresaServicio.listAll());
        }
        return "empresa-list";
    }

    @GetMapping("/form")
    public String crearEmpresa(Model model, @RequestParam(required = false) String id) {
        if (id != null) {
            Optional<Empresa> optional = empresaServicio.findById(id);
            if (optional.isPresent()) {
                model.addAttribute("empresa", optional.get());
            } else {
                return "redirect:/empresa/list";
            }
        } else {
            model.addAttribute("empresa", new Empresa());
        }/*
        model.addAttribute("ciudades", ciudadServicio.listAll());
        model.addAttribute("provincias", provinciaServicio.listAll());
        
        
        */
        return "empresa-form";
    }

    @PostMapping("/save")
    public String guardarEmpresa(Model model, RedirectAttributes redirectAttributes, Empresa empresa) throws IOException {

        try {
            empresaServicio.save(empresa);
            redirectAttributes.addFlashAttribute("error", "Primer paso completado exitosamente");
        } catch (WebException ex) {
            model.addAttribute("error", ex.getMessage());
            model.addAttribute("empresas", empresa);
            /*
        model.addAttribute("ciudades", ciudadServicio.listAll());
        model.addAttribute("provincias", provinciaServicio.listAll());
        */
            return "empresa-form";
        }
        return "redirect:/";
    }

    @GetMapping("/delete")
    public String delete(@RequestParam(required = true) String id) {
        empresaServicio.deleteById(id);
        return "redirect:/empresa/list";
    }

    @GetMapping("/vacaciones")
    public String listAll(Model model, @RequestParam(required = false) String query) {
        if (query != null) {
            model.addAttribute("empresas", empresaServicio.listallByQ(query));
        } else {
            model.addAttribute("empresas", empresaServicio.listAll());
        }
        return "empresa-vacaciones";
    }
}
