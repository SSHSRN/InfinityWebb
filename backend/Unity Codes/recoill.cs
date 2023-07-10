using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using System;
using System.IO;

public class recoils : MonoBehaviour
{
    [SerializeField] GameObject hiteffect;
    [SerializeField] float range = 100f;
    [SerializeField] float damage = 50f;
    [SerializeField] float recoilDistance = 0.5f;
    [SerializeField] float returnSpeed = 5f;

    private Vector3 originalPosition;
    private Transform gunTransform; // Reference to the gun's transform
    private bool isFiring = false;

    private void Awake()
    {
        gunTransform = transform; // Assign the gun's transform reference
        originalPosition = gunTransform.localPosition; // Store the original position of the gun
    }

    void Update()
    {
        // Move the gun based on mouse position
        Vector2 mousePosition = Mouse.current.position.ReadValue();
        Vector3 worldMousePosition = Camera.main.ScreenToWorldPoint(new Vector3(mousePosition.x, mousePosition.y, 10f));
        gunTransform.LookAt(worldMousePosition, Vector3.up);

        if (Mouse.current.leftButton.wasPressedThisFrame && !isFiring)
        {
            StartCoroutine(Fire());
        }

        if (isFiring)
        {
            // Move the gun forward
            gunTransform.Translate(Vector3.forward * recoilDistance * Time.deltaTime);

            // If the gun has reached or passed the maximum recoil distance
            if (Vector3.Distance(originalPosition, gunTransform.localPosition) >= recoilDistance)
            {
                isFiring = false;
            }
        }
        else
        {
            // Move the gun back to its original position
            gunTransform.localPosition = Vector3.Lerp(gunTransform.localPosition, originalPosition, returnSpeed * Time.deltaTime);
        }
    }

    private IEnumerator Fire()
    {
        isFiring = true;

        RaycastHit hit;
        if (Physics.Raycast(transform.position, transform.forward, out hit, range))
        {
            Debug.Log("We hit " + hit.transform.name);
            EnemyHealth target = hit.transform.GetComponent<EnemyHealth>();
            target.TakeDamage(damage);
        }
        else
        {
            Debug.Log("We did not hit anything.");
        }

        // Wait for some time before returning the gun to its original position
        yield return new WaitForSeconds(1f);

        // Reset the gun's position
        isFiring = false;
    }
}
