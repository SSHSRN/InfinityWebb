using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using System;
using System.IO;

public class weapon : MonoBehaviour
{
    [SerializeField] GameObject hitEffect;
    [SerializeField] float range = 100f;
    [SerializeField] float damage = 50f;
    [SerializeField] int maxAmmo = 10;
    [SerializeField] float reloadTime = 1f;

    private int currentAmmo;
    private bool isReloading;

    private void Start()
    {
        currentAmmo = maxAmmo;
        isReloading = false;
    }

    private void Update()
    {
        if (Mouse.current.leftButton.wasPressedThisFrame)
        {
            if (!isReloading)
            {
                if (currentAmmo > 0)
                {
                    Shoot();
                }
                else
                {
                    StartCoroutine(Reload());
                }
            }
        }
    }

    private void Shoot()
    {
        RaycastHit hit;
        if (Physics.Raycast(transform.position, transform.forward, out hit, range))
        {
            Debug.Log("We hit " + hit.transform.name);
            EnemyHealth target = hit.transform.GetComponent<EnemyHealth>();
            if (target != null)
            {
                target.TakeDamage(damage);
                Instantiate(hitEffect, hit.point, Quaternion.LookRotation(hit.normal));
            }
        }
        else
        {
            Debug.Log("We did not hit anything.");
        }

        currentAmmo--;
    }

    private IEnumerator Reload()
    {
        isReloading = true;
        Debug.Log("Reloading...");

        yield return new WaitForSeconds(reloadTime);

        currentAmmo = maxAmmo;
        isReloading = false;
    }
}
