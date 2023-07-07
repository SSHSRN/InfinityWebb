using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using System;
using System.IO;

public class weapon : MonoBehaviour
{
    [SerializeField]  GameObject hiteffect;
    [SerializeField]  float range = 100f;
    [SerializeField]  float  damage = 50f;

void Update()
{
    if (Mouse.current.leftButton.wasPressedThisFrame)
    {
        Shoot();
    }
}

private void Shoot()
{
    

    RaycastHit hit;
    if(Physics.Raycast(transform.position, transform.forward, out hit, range))
    {
        Debug.Log("We hit " + hit.transform.name);
        EnemyHealth target = hit.transform.GetComponent<EnemyHealth>();
        target.TakeDamage(damage);

    }
    else
    {
        Debug.Log("We did not hit anything.");
    }

}
}
