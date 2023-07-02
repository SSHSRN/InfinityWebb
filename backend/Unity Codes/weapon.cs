using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using System;
using System.IO;

[Serializable]
public class WeaponData
{
    public float damage;
}

public class weapon : MonoBehaviour
{
    [SerializeField] private float damage = 50f;
    [SerializeField] private ParticleSystem muzzleFlash;
    [SerializeField] private GameObject hiteffect;

    private InputAction shootAction;

    private void OnEnable()
    {
        shootAction = new InputAction("Fire1", binding: "<Mouse>/leftButton");
        shootAction.Enable();
        shootAction.started += ctx => Shoot();
    }

    private void OnDisable()
    {
        shootAction.Disable();
        shootAction.started -= ctx => Shoot();
    }

    private void Shoot()
    {
        PlayMuzzleFlash();
        ProcessRaycast();
    }
    private void PlayMuzzleFlash()
    {
        muzzleFlash.Play();
    }
    private void ProcessRaycast(){
        RaycastHit hit;
        if (Physics.Raycast(transform.position, transform.forward, out hit))
        {
            Debug.Log("I hit " + hit.transform.name);
            EnemyHealth target = hit.transform.GetComponent<EnemyHealth>();
            target.TakeDamage(damage);

            // Serialize and save weapon data
         
        }
        else
        {
            Debug.Log("No EnemyHealth component found on the hit object.");
        }
    }

    private void LoadWeaponData()
    {
        // Load and deserialize weapon data
        if (File.Exists("weaponData.json"))
        {
            string jsonData = File.ReadAllText("weaponData.json");
            WeaponData weaponData = JsonUtility.FromJson<WeaponData>(jsonData);
            damage = weaponData.damage;
        }
    }
    private void CreateimpactEffect(RaycastHit hit)
    {
        GameObject impactEffect = Instantiate(hiteffect, hit.point, Quaternion.LookRotation(hit.normal));
        Destroy(impactEffect, 0.1f);
    }
}
